import React, { useState } from 'react';
import Recipe_Data from '../components/Recipe/Recipe_Data';
import Recipe_Order from '../components/Recipe/Recipe_Order';
import TestImg from '@/assets/images/Test.png';

const recipeInfo = {
  id: 1,
  title: 'كبدة دجاج مقلي',
  subtitle: 'مع صلصة التوت البري',
  price: 170,
  fullPrice: 220,
  img: TestImg,
  ingredients: [
    '500 جرام كبدة دجاج منظّفة',
    '1 كوب دقيق للتغليف',
    'ملح وفلفل أسود حسب الرغبة',
    'نصف ملعقة صغيرة بابريكا (فلفل أحمر حلو)',
    'زيت نباتي للقلي',
    '1 كوب صوص توت بري (جاهز أو محضّر منزليًا)',
    'توت بري طازج للتزيين (اختياري)',
  ],
  preparation: [
    'نظفي الكبدة جيدًا وأزيلي أي عروق أو دهون زائدة.',
    'في طبق، اخلطي الدقيق مع الملح والفلفل والبابريكا.',
    'اغمسي الكبدة في خليط الدقيق حتى تتغلف جيدًا.',
    'سخني الزيت في مقلاة عميقة على حرارة متوسطة.',
    'اقلي الكبدة حتى تصبح ذهبية ومقرمشة (حوالي 3-4 دقائق لكل جانب).',
    'قدميها ساخنة مع صوص التوت البري والتزيين حسب الرغبة.',
  ],
};

function Recipe() {
  const [orderItems, setOrderItems] = useState([{
      id: recipeInfo.id,
     type: 'full',
      title: recipeInfo.title,
      price: recipeInfo.fullPrice,
      qty: 1,
      img: recipeInfo.img
     }]);

  const addToOrder = (item) => {
    setOrderItems(prev => {
      const exists = prev.find(i => i.id === item.id && i.type === item.type);
      if (exists) {
        return prev.map(i =>
          i === exists ? { ...i, qty: i.qty + item.qty } : i
        );
      }
      return [...prev, item];
    });
  };

  const handleQtyChange = (id, type, qty) => {
    setOrderItems(prev =>
      qty < 1
        ? prev.filter(i => !(i.id === id && i.type === type))
        : prev.map(i =>
            i.id === id && i.type === type ? { ...i, qty } : i
          )
    );
  };

  return (
    <>
      <div className="fixed inset-0 bg-[#E6E6E6] -z-10" />
      <div className="relative flex flex-col-reverse lg:flex-row justify-center items-start gap-4 py-2 mx-[60px] lg:max-w-full">
        <Recipe_Order
          orderItems={orderItems}
          onQtyChange={handleQtyChange}
        />
        <Recipe_Data recipe={recipeInfo} addToOrder={addToOrder} />
      </div>
    </>
  );
}

export default Recipe;
