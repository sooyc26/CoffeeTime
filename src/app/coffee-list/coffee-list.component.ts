import { DrinkOrder, DrinkService } from './../services/drink-service/drink.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee-list',
  // template: `
  //   <p>
  //     coffee-list works!
  //   </p>
  // `,
  templateUrl: './coffee-list.component.html',

  styles: []
})
export class CoffeeListComponent implements OnInit {

    orderList: any
  constructor(service:DrinkService) { 
    this.orderList = service.getOrders()
    console.log(this.orderList)
  }

  ngOnInit(): void {
  }

}
/** 

 public int KthSmallest(int[][] matrix, int k)
        {
            //find row and element
            //mergesort

            //set first array to list
            //add range

            //mergesort
            //return kth value

            var list = new List<int>();
            foreach (var arr in matrix)
            {
                list.AddRange(arr);
            }
            var sorted = MergeSort(list.ToArray());
            return sorted[k];
        }

        public int[] MergeSort(int[] array)
        {

            if (array.Length < 2) return array;

            var mid = array.Length / 2;
            var left = new int[mid];
            var right = new int[array.Length - mid];

            for (var i = 0; i < mid; i++)
            {
                left[i] = array[i];
            }
            for (var i = mid; i < array.Length; i++)
            {
                right[i - mid] = array[i];
            }
            left = MergeSort(left);
            right = MergeSort(right);

            var check = Merge(left, right);
            return check;

        }
        public int[] Merge(int[] left, int[] right)
        {

            int i = 0, j = 0, k = 0;
            var retArr = new int[left.Length + right.Length];

            while (i < left.Length && j < right.Length)
            {
                if (left[i] >= right[j])
                {
                    retArr[k] = right[j];
                    k++;
                    j++;
                }
                else
                {
                    retArr[k] = left[i];
                    k++;
                    i++;
                }
            }

            while (i < left.Length)
            {
                retArr[k] = left[i];
                k++;
                i++;
            }
            while (j < right.Length)
            {
                retArr[k] = right[j];
                k++;
                j++;
            }
            return retArr;
        }
*/
