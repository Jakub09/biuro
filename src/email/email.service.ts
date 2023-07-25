import { SES, SESClient } from '@aws-sdk/client-ses';
import { Injectable } from '@nestjs/common';
import { EmailAddress } from './model/email-address';

Injectable();
export class EmailService {
  async sendEmailNotification(
    emailAddres: EmailAddress,
    emailTemplate: string,
  ) {
    console.log(`email sent to ${emailAddres} , with content ${emailTemplate}`);
  }
  async sendEmailTest() {
    const sesClient = new SES({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_SES_ACCES_KEY_ID,
        secretAccessKey: process.env.AWS_SES_SECRET_ACCES_KEY,
      },
    });
    // Set the region
    // AWS.config.update({
    //   accessKeyId: process.env.AWS_SES_ACCES_KEY_ID,
    //   secretAccessKey: process.env.AWS_SES_SECRET_ACCES_KEY,
    //   region: process.env.AWS_REGION,
    // });

    // Create sendEmail params
    var params = {
      Destination: {
        /* required */
        ToAddresses: [
          'jakubhajduk647@gmail.com',
          /* more items */
        ],
      },
      Message: {
        /* required */
        Body: {
          /* required */
          Html: {
            Charset: 'UTF-8',
            Data: 'test',
          },
          Text: {
            Charset: 'UTF-8',
            Data: 'test',
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: 'Test email',
        },
      },
      Source: 'noreply@biuro.awsapps.com' /* required */,
    };
    return sesClient.sendEmail(params);
    // Create the promise and SES service object
  }
}
