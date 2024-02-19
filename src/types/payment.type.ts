import { CoverRange } from "./cover.range.type";

export type CreatePaymentDto = {
  amount: number;
  callbackUrl: string;
  sandBox?: boolean;
  webhookUrl?: string;
  webhookParams?: object;
  callbackParams?: object;
  language?: string;
  currency?: string;
  cover?: CoverRange;
};
export type PaymentRequestType = {
  amount: number;
  callbackParams?: object;
  webhookParams?: object;
  webhookUrl?: string;
  language?: string;
  currency?: string;
  cover?: CoverRange;
};
export type RequestPaymentResponseType = {
  id: number;
  paymentUid: string;
  paymentUrl: string;
};

export type VerifyPaymentRequest = {
  amount: number;
  currency: string;
  paymentUid: string;
};

export type VerifyResponseType = {
  status: string;
  message: string;
  errorCode: number;
};
