interface ContactFormEmailProps {
  email: string;
  subject: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  email,
  subject,
  message,
}) => (
  <div
    style={{
      backgroundColor: '#0F1729',
      maxWidth: '650px',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '24px',
      borderRadius: '8px',
      fontFamily: 'Roboto, sans-serif',
    }}
  >
    <table style={{ maxWidth: '600px', width: '100%' }}>
      <thead>
        <tr>
          <th
            style={{
              textAlign: 'center',
              color: '#14b8a5',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: '50px',
              lineHeight: '50px',
            }}
          >
            Awandri.com
          </th>
        </tr>
        <tr>
          <td
            align='center'
            style={{
              padding: 0,
              margin: 0,
              paddingTop: '15px',
              fontSize: 0,
              borderBottom: '1px solid #ffffff',
            }}
          ></td>
        </tr>
        <tr>
          <td
            align='center'
            style={{
              padding: 0,
              margin: 0,
              paddingBottom: '15px',
              fontSize: 0,
            }}
          ></td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td
            style={{
              fontSize: '24px',
              lineHeight: '24px',
              textAlign: 'center',
              color: '#ffffff',
            }}
          >
            You received the following message from{' '}
            <a href={`mailto:${email}`} style={{ color: '#14b8a5' }}>
              {email}
            </a>{' '}
            from your personal website contact form:
          </td>
        </tr>
      </tbody>
    </table>

    {/* SUBJECT */}
    <table style={{ maxWidth: '600px', width: '100%', marginTop: '40px' }}>
      <thead>
        <tr>
          <th
            style={{
              textAlign: 'left',
              color: '#14b8a5',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: '24px',
              lineHeight: '24px',
            }}
          >
            Subject:
          </th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ height: '32px' }}>
          <td
            style={{
              fontSize: '18px',
              lineHeight: '18px',
              marginTop: '16px',
              color: '#ffffff',
            }}
          >
            {subject}
          </td>
        </tr>
      </tbody>
    </table>

    {/* BODY MESSAGE */}
    <table style={{ maxWidth: '600px', width: '100%', marginTop: '12px' }}>
      <thead>
        <tr>
          <th
            style={{
              textAlign: 'left',
              color: '#14b8a5',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: '24px',
              lineHeight: '24px',
            }}
          >
            Message:
          </th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ height: '32px' }}>
          <td
            style={{
              fontSize: '18px',
              lineHeight: '18px',
              marginTop: '16px',
              color: '#ffffff',
            }}
          >
            {message}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ContactFormEmail;
