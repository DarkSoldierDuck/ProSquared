// ========== 抽象类 ==========
abstract class Shape {
    protected String name;

    public Shape(String name) {
        this.name = name;
    }

    public abstract double area();

    public void printInfo() {
        System.out.println(name + " 的面积是: " + area());
    }
}

// ========== 接口 ==========
interface Drawable {
    // 接口里的方法默认是 public abstract
    void draw();

    // 接口里可以有常量（默认 public static final）
    String TYPE = "图形";

    // Java 8+ 接口可以有默认方法（有实现）
    default void describe() {
        System.out.println("这是一个" + TYPE);
    }

    // Java 8+ 接口可以有静态方法
    static void tip() {
        System.out.println("提示：所有图形都可以画出来");
    }
}

// ========== 子类：继承抽象类 + 实现接口 ==========
class Circle extends Shape implements Drawable {
    private double radius;

    public Circle(double radius) {
        super("圆形");          // 调用抽象类构造方法
        this.radius = radius;
    }

    @Override
    public double area() {      // 实现抽象类的方法
        return Math.PI * radius * radius;
    }

    @Override
    public void draw() {        // 实现接口的方法
        System.out.println("画一个圆，半径 " + radius);
    }
}

class Rectangle extends Shape implements Drawable {
    private double w, h;

    public Rectangle(double w, double h) {
        super("矩形");
        this.w = w;
        this.h = h;
    }

    @Override
    public double area() {
        return w * h;
    }

    @Override
    public void draw() {
        System.out.println("画一个矩形，宽 " + w + " 高 " + h);
    }
}

// ========== 主类：程序入口 ==========
public class ShapeDemo {
    public static void main(String[] args) {
        Shape[] shapes = {
            new Circle(2),
            new Rectangle(3, 4)
        };

        for (Shape s : shapes) {
            s.printInfo();               // 抽象类的普通方法
            ((Drawable) s).draw();       // 接口方法
            ((Drawable) s).describe();   // 接口默认方法
            System.out.println("---");
        }

        Drawable.tip();                  // 接口静态方法
    }
}