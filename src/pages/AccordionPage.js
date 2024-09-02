import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'efhksh',
      label: 'can i use react?',
      content: 'yes you can use react.yes you can use react.yes you can use react.yes you can use react.'
    },
    {
      id: 'fdst7sdf',
      label: 'can i use javascript?',
      content: 'yes you can use react.yes you can use react.yes you can use react.yes you can use react.'
    },
    {
      id: 'sdf8sfd',
      label: 'can i use css?',
      content: 'yes you can use react.yes you can use react.yes you can use react.yes you can use react.'
    }
  ];
  return <Accordion items={items} />
}

export default AccordionPage;