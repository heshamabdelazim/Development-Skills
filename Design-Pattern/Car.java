public class Car {
    /*
    -this to apply on (Creational-DesignPattern-Builder)
    -Used if the constructor arguments are too long while creating objects
    -Used if the class has many constructor overloading
    -It increases readability of the code
    -It increases Flexibility how? you just configure only parts unlike constructor has all of parts
    PLEASE NOTE: start read the Main class to understand its usage
    */

    private String engine;
    private String wheels;
    private String color;
    private String company;
    Car (String engine, String wheels, String color, String compnay){
        this.engine = engine;
        this.wheels = wheels;
        this.color = color;
        this.company = compnay;
    }
    @Override
    public String toString(){
        return "Company is " + company + ", wheels are " + wheels + ", color is " + color + ", engine is "+engine;
    }
}


class CarBuilder{
    private String engine;
    private String wheels;
    private String color;
    private String company;

    public CarBuilder setEngine(String engine){
        this.engine=engine;
        return this;
    }
    public CarBuilder setWheels(String wheels){
        this.wheels=wheels;
        return this;
    }
    public CarBuilder setColor(String color){
        this.color=color;
        return this;
    }
    public CarBuilder setCompany(String company){
        this.company = company;
        return this;
    }

    public Car build(){
        return new Car(engine,wheels,color,company);
//  Or just   return new Car(this);
    }
}

 class Main{
    public static void main(String[] args){
        Car x = new CarBuilder()
                .setEngine("fastEngine")
                .setColor("white")
                .build();

        /*
        * without (build desing pattern) it would be
        * Car x = new Car("fastEngine", null, "white", null);
        */
        System.out.println(x);
    }
}