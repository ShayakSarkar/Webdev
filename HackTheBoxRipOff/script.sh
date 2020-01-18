#! /bin/bash
let num1
let num2
echo "Enter a number: ";
read num1;

echo "Enter second number: ";
read num2;

answer=$(($num1 + $num2));

echo $answer;

