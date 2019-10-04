
import java.lang.*;
import java.util.Scanner; 
public class Anagram
{   static int temp[] = new int[26];
    public static boolean isAnagram(String str)
    {
    	char s[] = str.toCharArray();
    	for (int i=0;i<s.length ;i++ ) {

    		if(s[i]!=' ')
    			temp[s[i]-'a']++;	
    	}

    	for(int i=0;i<26;i++)
    	{
    		if(temp[i]==0)
    		{
    			
    			return false;
    		}
    	}
    	return true;
    }
	public static void main(String[] args)
	{
          Scanner sc = new Scanner(System.in);
          System.out.println("Please Enter a String");
          String s11 = sc.nextLine();
           String str = s11.toLowerCase();
          

          if(isAnagram(str))
          	System.out.println("Anagram");
          	else
          		System.out.println("Not Anagram");



	}
}