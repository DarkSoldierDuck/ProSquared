class Animal {

    public static void main(String[] args) {
        Animal animal = new Animal();
        animal.speak();

        Dog dog = new Dog();
        dog.speak();
    }

    public void speak() {
        System.out.println("动物叫");
    }
}

class Dog extends Animal {
    @Override
    public void speak() {
        System.out.println("汪汪");
    }
}