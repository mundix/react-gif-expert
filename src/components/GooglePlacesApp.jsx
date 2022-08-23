import { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

export const GooglePlacesApp = () => {
   const [value, setValue] = useState(null)
   const api_key="AIzaSyBx_cZFCH6pbRCdWKf8WopN5bBS6LiBIA4";
  return (
   <div>
    <GooglePlacesAutocomplete
      apiKey={api_key}
      selectProps={{
         value,
         onChange: setValue
      }}
    />
  </div>
  )
}
