import { Subjects, ExpirationCompleteEvent, Publisher } from '@asinghs/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
