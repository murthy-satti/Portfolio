import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Snowfall from 'react-snowfall'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Snowfall
  // Changes the snowflake color
  color="white"
  // Controls the number of snowflakes that are created (default 150)
  snowflakeCount={200}
/>
    
    <App/>
  </StrictMode>,
)
