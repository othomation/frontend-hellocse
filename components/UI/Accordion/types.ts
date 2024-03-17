export type AccordionItem = {
  id: number;
  title: string;
  content: string[];
  imageData: {
    url: string;
    alt: string;
  };
};

export type AccordionItems = AccordionItem[];
