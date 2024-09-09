# Реализация AccountService через подход Test Driven Development подход

Цель:
научиться разрабатывать программное обеспечение через тестирование;
написать AccountService класс и спецификация(тесты) для его интерфейсов.


Описание/Пошаговая инструкция выполнения домашнего задания:
Продуктовая задача
Я как пользователь хочу устанавливать разным типам пользователей скидку, для разных типов товара

- система имеет 4 типа пользователей Standard, Premium, Gold, Free

- для каждого типа пользователей в базе данных устанавливается своя скидка на все товары

- для конкретного типа товаров может быть своя скидка у конкретного типа пользователей

- сущестующие типы товаров: Car, Toy, Food

- если пользователь имеет скидку и товар имеет скидку для текущего пользователя, то скидка суммируется


## Установка

Установить зависимотси:

```sh
npm install
```

Запуск тестов:

```sh
npm run test
```

![](https://github.com/rddeveloper2019/publicfiles/blob/main/gendiff%20images/2024-09-09_20-08.jpg?raw=true)