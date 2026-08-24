// lib/email.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

type SendEmailParams = {
  to: string | string[]
  subject: string
  html: string
  replyTo?: string
  from?: string
}

export async function sendEmail({
  to,
  subject,
  html,
  replyTo,
  from,
}: SendEmailParams) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured')
  }

  if (!process.env.EMAIL_FROM) {
    throw new Error('EMAIL_FROM is missing')
  }

  const { data, error } = await resend.emails.send({
    from: from ?? process.env.EMAIL_FROM ?? 'Website <onboarding@resend.dev>',
    to,
    subject,
    html,
    replyTo,
  })

  if (error) {
    console.error('Failed to send email:', error)
    throw new Error(
      `${error.name}: ${error.message}`
    )
  }

  return data
}