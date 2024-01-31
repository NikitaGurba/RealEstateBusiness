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

export type blockTabs = {
  type: string;
  header: string;
  paragraph: string;
  buttons: string[];
};

export type aboutValuesPayload = Array<card>;

export type TitleParagraph = {
  header: string;
  paragraph: string;
};

export type AboutAchievementsType = {
  titleParagraph: TitleParagraph;
  cards: Array<TitleParagraph>;
};

export type MainCardType = {
  header: string,
  paragraph: string,
  button: string
}

export type HeaderCardType = {
  header: string,
  src: string
}