export type card = {
  src: string;
  title: string;
  paragraph: string;
};

export type cardWithButton = {
  title: string;
  paragraph: string;
};

export interface payload {
  title: string;
  paragraph: string;
  cards: Array<card>;
  cardWithButton: cardWithButton;
}

export type elem = Element | undefined;

export type HeaderCardPayload = Array<Array<string>>;
