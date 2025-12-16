# Cal.com Integration Setup

## API Key
Your Cal.com API key is stored in `.env.local`:
```
NEXT_PUBLIC_CAL_API_KEY=cal_live_63fc5c1259deecfb6639ec9abddd75ee
```

## Quick Setup Instructions

### Step 1: Set Up Your Cal.com Account
1. Go to https://app.cal.com and sign up/login
2. Complete your profile setup
3. Go to "Event Types" and create a new event (e.g., "30min Consultation")
4. Configure your availability and meeting details
5. Note your username from the URL (e.g., `app.cal.com/YOUR_USERNAME`)

### Step 2: Update the Component
In `components/Appointments.tsx`, update these two lines:
```tsx
const calUsername = 'YOUR_CAL_USERNAME'  // Replace with your Cal.com username
const eventType = 'YOUR_EVENT_TYPE'      // Replace with your event type slug
```

**Example:**
- If your Cal.com URL is: `https://cal.com/porygon/consultation`
- Then use:
  ```tsx
  const calUsername = 'porygon'
  const eventType = 'consultation'
  ```

### Step 3: Test It
1. Save the file
2. Refresh your website
3. The calendar should now appear inline on the appointments section

### 3. Customize the Embed
You can customize the Cal.com embed with these options in the `data-cal-config` attribute:

```json
{
  "layout": "month_view",  // or "week_view", "column_view"
  "theme": "dark",         // or "light", "auto"
  "hideEventTypeDetails": false,
  "hideLandingPageDetails": false
}
```

### 4. Using the API Key
The API key can be used for:
- Creating bookings programmatically
- Fetching availability
- Managing event types
- Webhook integrations

Example API usage:
```javascript
const response = await fetch('https://api.cal.com/v1/bookings', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CAL_API_KEY}`,
    'Content-Type': 'application/json'
  }
})
```

## Features
- ✅ Automatic timezone detection
- ✅ Email notifications
- ✅ Calendar sync (Google, Outlook, etc.)
- ✅ Customizable booking forms
- ✅ Payment integration (optional)
- ✅ Reminder emails

## Documentation
- Cal.com Embed: https://cal.com/docs/integrations/embed
- Cal.com API: https://cal.com/docs/api-reference
