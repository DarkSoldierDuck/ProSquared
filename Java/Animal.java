class Animal {

    public void speak() {
        System.out.println("动物叫");
    }
}

class Dog extends Animal {
    @Override
    public void speak() {         // 名字对得上，编译通过
        System.out.println("汪汪");
    }
}