import { DataTableDemo } from '@/components/card';
import React from 'react';
const nailsCatalog = {
    nails: [
        {
            id: 1,
            type: "A123",
            length: "30 мм",
            diameter: "2.0 мм",
            material: "Нержавеющая сталь",
            quantity: 200,
            price: 5.75,
            description: "Оптимальны для крепления фанеры и древесных плит."
        },
        {
            id: 2,
            type: "B456",
            length: "25 мм",
            diameter: "1.6 мм",
            material: "Сталь",
            quantity: 250,
            price: 4.50,
            description: "Легкие и прочные, идеально подходят для гипсокартонных конструкций."
        },
        {
            id: 3,
            type: "C789",
            length: "40 мм",
            diameter: "3.5 мм",
            material: "Сталь",
            quantity: 90,
            price: 8.70,
            description: "Дополнительная шляпка обеспечивает лучшее распределение нагрузки."
        },
        {
            id: 4,
            type: "D012",
            length: "55 мм",
            diameter: "3.0 мм",
            material: "Цинк",
            quantity: 120,
            price: 7.90,
            description: "Предназначены для крепления компонента на обшивку."
        },
        {
            id: 5,
            type: "E345",
            length: "30 мм",
            diameter: "2.5 мм",
            material: "Сталь",
            quantity: 180,
            price: 6.80,
            description: "Используются для крепления электрических и телефонных кабелей."
        },
        {
            id: 6,
            type: "F678",
            length: "65 мм",
            diameter: "4.0 мм",
            material: "Нержавеющая сталь",
            quantity: 85,
            price: 9.50,
            description: "Устойчивы к внешней среде, идеальны для террас."
        },
        {
            id: 7,
            type: "G901",
            length: "40 мм",
            diameter: "2.2 мм",
            material: "Цинк",
            quantity: 200,
            price: 5.99,
            description: "Специально для монтажа настенных панелей."
        },
        {
            id: 8,
            type: "H234",
            length: "25 мм",
            diameter: "2.0 мм",
            material: "Дерево",
            quantity: 150,
            price: 4.20,
            description: "Специально разработаны для крепления ящиков и садовых конструкций."
        },
        {
            id: 9,
            type: "I567",
            length: "45 мм",
            diameter: "3.0 мм",
            material: "Сталь",
            quantity: 100,
            price: 6.25,
            description: "Идеальны для крепления твердых древесных плит."
        },
        {
            id: 10,
            type: "J890",
            length: "20 мм",
            diameter: "1.5 мм",
            material: "Пластик",
            quantity: 500,
            price: 3.00,
            description: "Легкие и не подвержены ржавчине, идеальны для временных работ."
        },
        {
            id: 11,
            type: "Z001",
            length: "50 мм",
            diameter: "2.5 мм",
            material: "Космический сплав",
            quantity: 60,
            price: 20.00,
            description: "Созданы для использования в условиях космоса."
        },
        {
            id: 12,
            type: "X002",
            length: "30 мм",
            diameter: "1.8 мм",
            material: "Радужный металл",
            quantity: 100,
            price: 12.50,
            description: "Идеальны для создания ярких и необычных проектов."
        },
        {
            id: 13,
            type: "Y003",
            length: "55 мм",
            diameter: "3.2 мм",
            material: "Алюминий",
            quantity: 90,
            price: 7.00,
            description: "Легкие и удобные для строительных работ."
        },
        {
            id: 14,
            type: "W004",
            length: "25 мм",
            diameter: "1.5 мм",
            material: "Зеленый пластик",
            quantity: 300,
            price: 2.50,
            description: "Экологически чистые, подходят для временных конструкций."
        },
        {
            id: 15,
            type: "V005",
            length: "40 мм",
            diameter: "2.0 мм",
            material: "Углеродное волокно",
            quantity: 120,
            price: 15.00,
            description: "Супер легкие и прочные, идеально подходят для современных проектов."
        },
        {
            id: 16,
            type: "U006",
            length: "35 мм",
            diameter: "2.2 мм",
            material: "Титан",
            quantity: 50,
            price: 25.00,
            description: "Идеальные гвозди для высокотехнологичных изделий."
        },
        {
            id: 17,
            type: "T007",
            length: "60 мм",
            diameter: "3.5 мм",
            material: "Наноматериалы",
            quantity: 30,
            price: 40.00,
            description: "Гвозди с особыми свойствами для специфических использований."
        },
        {
            id: 18,
            type: "S008",
            length: "20 мм",
            diameter: "1.0 мм",
            material: "Силикон",
            quantity: 200,
            price: 1.80,
            description: "Гибкие и удобные, идеальны для креативных решений."
        },
        {
            id: 19,
            type: "R009",
            length: "45 мм",
            diameter: "4.0 мм",
            material: "Цветной металл",
            quantity: 70,
            price: 9.00,
            description: "Придают дополнительный стиль любому проекту."
        },
        {
            id: 20,
            type: "Q010",
            length: "80 мм",
            diameter: "5.0 мм",
            material: "Кобальт",
            quantity: 40,
            price: 30.00,
            description: "Идеальные для тяжелых строительных работ."
        }
    ]
};


const ReturnsSection = () => {
    return (
        <main className="px-4 py-10  bg-neutral-950 text-white flex flex-col  min-h-screen">
           <h2 className="text-xl text-neutral-300 font-bold pt-10">Types and prises of nails</h2>
           
           <DataTableDemo/>
        </main>
    );
};

export default ReturnsSection;
