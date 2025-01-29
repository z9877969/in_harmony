import React from 'react';
import { SwiperArrows } from '@/shared/components';
import { SectionTitle } from '@/shared/components';

const content = [
  {
    id: 0,
    title: 'Вода в сіру зону',
    text: 'Проект вирішив проблему транспортування та зберігання питної води.Завдяки цьому проекту було доставлено 500 л питної води 54 людям у сірій зоні протягом тижня.',
    item: 'Зібрано:',
    total: '35768',
    currency: 'грн',
    term: 'Термін реалізаці:',
    days: '10 ',
    period: 'днів',
    imageUrl:
      'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
  },
  {
    id: 1,
    title: 'Вода в сіру зону-2',
    text: 'Проект вирішив проблему транспортування та зберігання питної води.Завдяки цьому проекту було доставлено 500 л питної води 54 людям у сірій зоні протягом тижня.',
    item: 'Зібрано:',
    total: '35768',
    currency: 'грн',
    term: 'Термін реалізаці:',
    days: '10 ',
    period: 'днів',
    imageUrl:
      'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
  },
  {
    id: 2,
    title: 'Вода в сіру зону-3',
    text: 'Проект вирішив проблему транспортування та зберігання питної води.Завдяки цьому проекту було доставлено 500 л питної води 54 людям у сірій зоні протягом тижня.',
    item: 'Зібрано:',
    total: '35768',
    currency: 'грн',
    term: 'Термін реалізаці:',
    days: '10 ',
    period: 'днів',
    imageUrl:
      'https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png',
  },
];
const OPTIONS = {};
const AchievementsSection = () => {
  return (
    <div>
      <SectionTitle title="Останні досягнення"/>
      <SwiperArrows slides={content} options={OPTIONS} />
    </div>
  );
};

export default AchievementsSection;
