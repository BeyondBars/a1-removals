// app/api/contact/route.ts

import { sendEmail } from '@/lib/email'

type QuoteRequest = {
  name: string
  phone: string
  date: string
  from: string
  to: string
  details?: string
}

export async function POST(request: Request) {
  try {
    const {
      name,
      phone,
      date,
      from,
      to,
      details,
    }: QuoteRequest = await request.json()

    if (!name || !phone || !date || !from || !to) {
      return Response.json(
        {
          message: 'Please complete all required fields.',
        },
        {
          status: 422,
        }
      )
    }

    await sendEmail({
      to: process.env.CONTACT_EMAIL!,
      subject: `New moving quote request from ${name}`,
      html: `
        <h2>New Moving Quote Request</h2>

        <p>
          <strong>Name:</strong>
          ${name}
        </p>

        <p>
          <strong>Phone:</strong>
          ${phone}
        </p>

        <p>
          <strong>Preferred moving date:</strong>
          ${date}
        </p>

        <p>
          <strong>Moving from:</strong>
          ${from}
        </p>

        <p>
          <strong>Moving to:</strong>
          ${to}
        </p>

        <p>
          <strong>Additional details:</strong>
        </p>

        <p>${details || 'No additional details provided.'}</p>
      `,
    })

    return Response.json({
      message: 'Quote request sent successfully.',
    })
  } catch (error) {
    console.error('Quote request error:', error)
    console.log(process.env, 'env')
    return Response.json(
      {
        message: 'Unable to send quote request.',
      },
      {
        status: 500,
      }
    )
  }
}