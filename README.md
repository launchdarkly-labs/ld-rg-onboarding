# Release Guardian Sample On-Boarding Application

This application is used to demonstrate Release Guardian functionality with simple metric events for the following metrics: 

* Latency Value
* Error Rate

## How It Works 

This application calls a local API repeatedly, with latency and error rates injected within to simulate connection details. These metrics are sent using the `client.track()` capability within the SDK. This application utilizes the `React` client SDK within a `NextJS 14` application. 

The user selects the `Begin` button, and the api call begins, the user can select `Increase Chaos` to speed up the calls, which initially only occur at 1 second intervals.


## Running the Application 
* Clone this repo `git clone https://github.com/launchdarkly-labs/ld-rg-onboarding`
* Install all required packages with `npm i`
* Run the application within `npm run dev`

**Note**: You'll need to follow the setup instructions before the app will function correctly. Follow these below. 

## Setup 

* Create a Project in LaunchDarkly
* Create a `.env.local` file and enter the following values from your 

```sh
LAUNCHDARKLY_SERVER_KEY='<Server SDK Key>'
NEXT_PUBLIC_LD_CLIENT_KEY='<Client SDK Key>'
```
* Create a Latency Metric in LaunchDarkly with the following parameters 
  - Name: `Latency`
  - Event Kind: `Custom: Numeric` 
  - Event Key: `Latency` 
  - Unit of Measure: `ms` 
  - Success Criteria: `Lower than baseline` 
  - Aggregation Method: `Average individual unit values`
  - Analysis method: `p95` 
  - Randomization units: `user` 
* Create a Error Metric in LaunchDarkly with the following parameters
  - Name: `Error`
  - Event Kind: `Custom: Conversion` 
  - Event Key: `Error Rate` 
  - Success Criteria: `Lower than baseline` 
  - Aggregation Method: `Average individual unit values`
  - Randomization units: `user`  
* Create a Boolean feature for `planetAPI` (add as much detail as you wish, but it needs to have this key)
* Attach Error and Latency metrics to this feature 
* Enable the feature, and select `Monitor and Save` 
* Select monitor duration (or select Customize)
* Select Next 
* Save Changes
* Select begin and observe the console log for events

