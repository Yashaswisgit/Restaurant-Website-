import images from './images';

const wines = [
  {
    title: 'Margerita',
    price: 'Rs569/-',
    tags: 'Medium | Thin Crust',
  },
  {
    title: 'Peppy Mushrooms',
    price: 'Rs595/-',
    tags: 'Medium | Thin Crust',
  },
  {
    title: 'Chefs Special',
    price: 'Rs777/-',
    tags: 'Medium | Thin Crust | Cheese Burst',
  },
  {
    title: 'Mac n Cheese',
    price: 'Rs310/-',
    tags: '750ml | Bowl',
  },
  {
    title: 'Family Combo',
    price: 'Rs889/-',
    tags: '',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: 'Rs220/-',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Mojito",
    price: 'Rs189/-',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Strawberry Al',
    price: 'Rs560/-',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: 'Rs399/-',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Bourboun Smoke',
    price: 'Rs826/-',
    tags: 'Whiskey | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Belle italian',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
