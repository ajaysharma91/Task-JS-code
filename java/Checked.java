
import java.io.*;
class TestExceptionPropagation2{  
  void m(){  
    throw new IOException("device error");//checked exception  
  }  
  void n(){  
    m();  
  }  
  void p(){  
   try{
    n();  }catch(Exception e){System.out.println("Hkjjk");}
   
  }  
  public static void main(String args[]){  
   TestExceptionPropagation2 obj=new TestExceptionPropagation2();  
   obj.p();  
   System.out.println("normal flow");  
  }  
}  