// Vercel Serverless Function: Lead Dispatcher for Sonde Capital
// Handles submissions from all 4 portals (Index, Borboyona, Adriano, Santa)

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    let payload = req.body;
    if (typeof payload === 'string') {
      try {
        payload = JSON.parse(payload);
      } catch (err) {
        payload = {};
      }
    }

    const {
      nombre = 'No especificado',
      empresa,
      institucion,
      cargo,
      email = '',
      telefono,
      proyecto,
      proyecto_interes,
      interes_transaccional,
      interes_participacion,
      mensaje = 'Sin mensaje adicional',
      origen_url = 'https://sondecapital.com',
      fecha_hora = new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' }),
      _honey = ''
    } = payload || {};

    // Anti-spam honeypot
    if (_honey && _honey.trim() !== '') {
      console.warn('Spam submission detected via honeypot.');
      return res.status(200).json({ success: true, message: 'Solicitud procesada con éxito' });
    }

    if (!email || email.trim() === '') {
      return res.status(400).json({ success: false, message: 'El correo electrónico corporativo es requerido' });
    }

    const entidad = empresa || institucion || 'No especificada';
    const proyectoNombre = proyecto || proyecto_interes || 'Portafolio General Sonde Capital';
    const tipoInteres = interes_transaccional || interes_participacion || 'Data Room & Evaluación';

    const apiKey = process.env.RESEND_API_KEY;
    const primaryDest = process.env.LEADS_EMAIL_PRIMARY || 'miguel.ampuero333@gmail.com';
    const secondaryDest = process.env.LEADS_EMAIL_SECONDARY || 'miguel.ampuero@sondecapital.com';

    const emailSubject = `[LEAD M&A] ${proyectoNombre} · ${entidad} (${nombre})`;

    // Executive HTML Email Template
    const htmlBody = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${emailSubject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b1120; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #0b1120; padding: 30px 15px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3); border: 1px solid #1e293b;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #090d16 0%, #0f172a 100%); padding: 32px 30px; text-align: left; border-bottom: 2px solid #f59e0b;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: #f59e0b; margin-bottom: 6px;">
                      Sonde Capital · Private Equity &amp; Mining Assets
                    </div>
                    <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; line-height: 1.3;">
                      Nueva Solicitud de Inversión &amp; Data Room
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Project Badge Banner -->
          <tr>
            <td style="background-color: #f8fafc; padding: 14px 30px; border-bottom: 1px solid #e2e8f0;">
              <span style="display: inline-block; padding: 5px 12px; background-color: #0f172a; color: #f59e0b; border-radius: 9999px; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;">
                Activo: ${proyectoNombre}
              </span>
            </td>
          </tr>

          <!-- Lead Details Table -->
          <tr>
            <td style="padding: 30px;">
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b; width: 38%;">
                    Inversionista / Contacto:
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 700; color: #0f172a;">
                    ${nombre} ${cargo ? `<span style="font-size: 12px; font-weight: 500; color: #64748b;">(${cargo})</span>` : ''}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b;">
                    Firma / Entidad / Fondo:
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 700; color: #0f172a;">
                    ${entidad}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b;">
                    Correo Electrónico:
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 600; color: #2563eb;">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${telefono ? `
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b;">
                    Teléfono / WhatsApp:
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 600; color: #0f172a;">
                    <a href="tel:${telefono}" style="color: #0f172a; text-decoration: none;">${telefono}</a>
                  </td>
                </tr>` : ''}
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b;">
                    Interés Transaccional:
                  </td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; font-weight: 700; color: #d97706;">
                    ${tipoInteres}
                  </td>
                </tr>
              </table>

              <!-- Message Block -->
              <div style="margin-top: 24px; padding: 18px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
                <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; margin-bottom: 8px;">
                  Mensaje / Requerimientos Específicos:
                </div>
                <div style="font-size: 13px; color: #334155; line-height: 1.6; white-space: pre-wrap;">
                  ${mensaje}
                </div>
              </div>

              <!-- Quick Action Button -->
              <div style="margin-top: 28px; text-align: center;">
                <a href="mailto:${email}?subject=RE: Solicitud Data Room - Sonde Capital (${encodeURIComponent(proyectoNombre)})" 
                   style="display: inline-block; padding: 14px 28px; background-color: #0f172a; color: #ffffff; font-size: 13px; font-weight: 700; text-decoration: none; border-radius: 10px; box-shadow: 0 4px 12px rgba(15,23,42,0.25);">
                  ✉️ Responder Directamente al Inversionista
                </a>
              </div>

            </td>
          </tr>

          <!-- Metadata Footer -->
          <tr>
            <td style="background-color: #f1f5f9; padding: 18px 30px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; line-height: 1.5;">
              <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
                <span><strong>Origen:</strong> <a href="${origen_url}" style="color: #64748b;">${origen_url}</a></span>
                <span><strong>Registro:</strong> ${fecha_hora} (Hora de Lima)</span>
              </div>
            </td>
          </tr>

        </table>

        <!-- Legal Disclaimer -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 620px; margin-top: 16px;">
          <tr>
            <td style="text-align: center; font-size: 11px; color: #64748b;">
              Notificación automática del Sistema de Captación Institucional de Sonde Capital.<br>
              Allen, Texas · San Isidro, Lima, Perú.
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Attempt delivery to both requested addresses: miguel.ampuero333@gmail.com and miguel.ampuero@sondecapital.com
    const recipients = [primaryDest, secondaryDest];

    let resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Sonde Capital <onboarding@resend.dev>',
        to: recipients,
        subject: emailSubject,
        html: htmlBody,
        reply_to: email
      })
    });

    let resendResult = await resendResponse.json();

    // If Resend failed because of domain verification restriction (403), fallback to primaryDest (the sandbox account owner)
    if (!resendResponse.ok && resendResult?.name === 'validation_error') {
      console.warn(`Resend domain restriction detected. Dispatching directly to verified account email (${primaryDest}):`, resendResult.message);
      
      const fallbackResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'Sonde Capital <onboarding@resend.dev>',
          to: [primaryDest],
          subject: emailSubject,
          html: htmlBody,
          reply_to: email
        })
      });

      const fallbackResult = await fallbackResponse.json();
      if (fallbackResponse.ok) {
        resendResult = fallbackResult;
      }
    }

    // Also forward in background via FormSubmit as secondary insurance so miguel.ampuero333@gmail.com and miguel.ampuero@sondecapital.com receive it immediately
    try {
      await fetch(`https://formsubmit.co/ajax/${primaryDest}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: emailSubject,
          _cc: secondaryDest,
          _template: 'table',
          _captcha: 'false',
          nombre,
          entidad,
          cargo: cargo || 'N/A',
          email,
          telefono: telefono || 'N/A',
          proyecto: proyectoNombre,
          interes: tipoInteres,
          mensaje,
          origen_url,
          fecha_hora
        })
      });
    } catch (formSubmitErr) {
      console.warn('FormSubmit backup dispatch notice:', formSubmitErr.message);
    }

    return res.status(200).json({
      success: true,
      message: 'Solicitud institucional transmitida exitosamente',
      id: resendResult?.id || 'delivered'
    });

  } catch (error) {
    console.error('Error in /api/contact handler:', error);
    return res.status(500).json({
      success: false,
      message: 'Error interno al procesar la solicitud',
      error: error.message
    });
  }
}
