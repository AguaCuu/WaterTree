import { CssBaseline, GlobalStyles } from '@mui/material';

const metadata = {
  title: 'WaterTrees',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body style={{ margin:0, padding:0}}>
      <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              margin: 0,
              padding: 0,
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
              lineHeight: 1.6,
              color: '#333',
              backgroundColor: '#f9f9f9',
            },
          }}
        />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
