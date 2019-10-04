import java.util.*;
public class TwoNWorker{
    public static int min(int a,int b)
		{
			return a<b?a:b;
		}
	public static void main(String[] args)
	{
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int arr[] = new int[2*n];
		System.out.println("Enter Value For Array:");
		for (int i=0;i<2*n;i++ ) {
			arr[i] = sc.nextInt();
		}
        int sum=0;
		// sort the data for solve the problem easily
		Arrays.sort(arr);
		for (int i=0;i<2*n;i+=2 ) {
              sum = sum + min(arr[i],arr[i+1]);
		}

		

		System.out.println(sum);
		
	}
}