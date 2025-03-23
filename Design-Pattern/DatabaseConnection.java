import javax.xml.crypto.Data;

public class DatabaseConnection {
//    applying on Creational-DesignPattern-Singleton

    private static DatabaseConnection myConneciton;
    private DatabaseConnection( ){
        System.out.print("connection started now...");
    }

    public static DatabaseConnection giveConnection(){
        if(myConneciton==null){
            myConneciton=new DatabaseConnection();
        }
        return myConneciton;
    };
    public static void main (String[]args){
        DatabaseConnection x =DatabaseConnection.giveConnection();
        DatabaseConnection y = DatabaseConnection.giveConnection();
        if(x==y) System.out.print("they are same");
    }
}
