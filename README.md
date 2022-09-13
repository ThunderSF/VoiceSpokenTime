# VoiceSpokenTime

Get a spoken version of a time. Especially useful for speaking the wait time. Works for a few languages. Please add to the vocabulary as you see fit.

The time is spoken in the given language with hours and minutes. If the time includes hours and the minutes are less than 5 then it rounds down to the hour. So the outputs would be like:

125.54 = 2 hours 6 minutes
123.65 = 2 hours
120.00 = 2 hours
50.44 = 50 minutes
1.22 = 1 minute

## Installation

- Create a new Lambda
- Select Author from Scratch
- Name it something like "AWSSCV_SpokenTime"
- Runtime = Node.js 16.x
- Architecture = x86_64
- Click "Create function"
- Test the function (see below)

## Use in a Contact Flow

- Make sure to allow the Lamdba from within Amazon Connect
- Add a "Get queue metrics" block
- Add a Invoke AWS Lamdba Function and choose our function
- Include the following within your prompt $.External.timePrompt

### Test Event

You should be able to use this JSON to test.
{
  "Details": {
    "Parameters": {
      "time": 128.33,
      "language": "Spanish"
    }
  }
}