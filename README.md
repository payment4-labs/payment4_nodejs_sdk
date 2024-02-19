# Payment4 Official SDK Documentation

- Streamlined and Efficient
- Promises/A+ Compatibility
- Secure Sandboxing

## 🕹 Usage

Install the package from npm or yarn and integrate it into your Node project:

```bash
npm install payment4
```

```javascript
const { Payment4 } = require("payment4")
// or
import { Payment4 } from 'payment4';
```

### Create Payment4 instance

```javascript
/**
 * Create Payment4 instance
 * apiKey and callbackUrl are both required.
 * sandBox is optional.
*/
const initParams = {
  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  callbackUrl: 'https://your-domain/verify',
  sandBox: false,
};
const payment4 = new Payment4(initParams);
```

## 📢 API

### ★ Requesting a Payment:

```javascript
/**
 * amount is required
 * callbackParams, webhookParams, webhookUrl, language , cover are optional
 * If no language is provided, the default language is set to 'en'
 * If no currency is provided, the default currency is set to 'USD'.
 * Define a range around the expected payment value to allow for small fluctuations
 */

  const params = {
    amount: 100,
    callbackParams: { "your-key": "your-value" },
    webhookParams: { "your-key": "your-value" },
    webhookUrl: "https://your-domain.com/webhook",
    language: "en", //not sensitive to uppercase or lowercase
    currency: "USD", //not sensitive to uppercase or lowercase
    cover: {
      coverUp: 50, // optional
      coverDown: 20, // optional
    },
  };
/**
 * requestPayment
 * @param {PaymentRequestType} params
 * @returns Promise<String>
 */
const paymentUrl = await payment4.requestPayment(params);
```

### Supported Languages :

```bash
  en
  fa
```


### Supported Currencies :

```bash
  USD  
  EUR  
  TRY  
  GBP 
  AED  
  IRT  
```


### ★ Verifying a Payment :

```javascript



/**
 * amount and paymentId and currency are required
 */
const params = {
  paymentUid: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  amount: 100,
  currency: "USD",      //not sensitive to uppercase or lowercase
};
/**
 * Verify Payment from PaymentId.
 * @param  {VerifyPaymentRequest} params
 * @returns Promise<boolean>
 */
const response = await payment4.verifyPayment(params);
```

---



Powered by [Payment4](https://payment4.com)
