// Html theory questions:

// 15.
// The form element is used in the creation of forms it acts as a container for various input elements
// suc as textfields,passwords,radiobuttons,checkboxes etc

// the attributes are name,value,type,target etc....


// 16.
// the label element is used in the form tag in html it is mostly used with the input tag and it acts as an input field name
//  indicator 

//  example 

//  <label>name</label>
//  <input type="text"></input>

//  you can also give the for attribute to the label element and attach it to the input element by giving input tag a fname attribute which has the same value as labels fname 



//  17. the a targets blank attribute is used with <a> </a> tag and it opens the link in a new window



//  5.span is an inline element where as div is a block element 

//  span is used to apply styling to the text without disrupting the flow of the text

//  18.the block element always starts on new line,it takes the full width
//  the inline element does not start on new line,it takes the only the necessary width required
//  the inline element does not start on new line,it takes the only the necessary width required and has both properties of block and inline


// 19.the link attribute is placed inside the head tag where as the anchor tag is placed inside the body tag
// the link attribute does not play any part with user intreraction and is not displayed on frontend where as the 
// content written inside anchor tag is visible on the frontend and the user can interact with it


// 14
// The <iframe> tag specifies an inline frame.

// An inline frame is used to embed another document within the current HTML document

// Syntax:<iframe src="url" title="description"></iframe>

// it is basically used to add a web page within another web page


// 13.the typess of list in html are 
// ordered list  <ol></ol>

// unordered list <ul></ul>
// description list <dl></dl>


// 12
// the id attribute is unique whereas the class attribute can be repeated

// it is accessed in css using . where as the class can be acceseed using # 


// 8.the button tag contains html texts enclosed within the tags and it can contain any type of content such as
// texts,images etc
// where as the unput type button contians the value attribute which acts as a label and does not allow any typoe of content in it


// 7.it is used to makes the web page responsive and also for SEO


// 6 global attributes of html are

// style,id,class,title etc

// 4

// The <!DOCTYPE> declaration defines the document type and version of HTML or XHTML used, allowing the browser to know how to interpret and render the page.





DSA questions



//1 Longest common substring

// const str1 = "abcde";
// const str2 = "bcdef";
// const str3 = "cdefg";

// function findLongestCommonSubstring(str1, str2, str3) {
//     let longestCommon = "";

//     for (let i = 0; i < str1.length; i++) {
//         for (let j = i + 1; j <= str1.length; j++) {
//             const currentSubstring = str1.slice(i, j);

//             if (str2.includes(currentSubstring) &&
//                 str3.includes(currentSubstring) &&
//                 currentSubstring.length > longestCommon.length) {
//                 longestCommon = currentSubstring;
//             }
//         }
//     }

//     return longestCommon;
// }

// const res = findLongestCommonSubstring(str1,str2,str3)
// console.log(res);

//2 find triplets with zero sum

// const nums = [-1,0,1,2,-1,-4]
// const target = 0;
// const res = [];
// for (let i = 0 ; i <= nums.length- 1 ; i++){
//     for (let j = i+1 ; j <= nums.length - 1 ; j++){
//         for (let k = j+1 ; k <= nums.length - 1 ; k++){
//                 if (nums[i]+nums[j] + nums[k] === target) {
//                        res.push([nums[i],nums[j],nums[k]]);
//             }
//         }
//     }
// }

// console.log(res);

//Find All Anagrams in a String 

// const result = [];
// const text = "cbaebabacd";
// const pattern = "abc";
// const pl = pattern.length;
// const tl = text.length;

// const sortedPattern = pattern.split("").sort().join("");

// for (let i = 0; i <= tl - pl; i++) {
//   const substring = text.slice(i, i + pl);
//   if (substring.split("").sort().join("") === sortedPattern) {
//     result.push(i);
//   }
// }

// console.log(result);

//  Merge Intervals
// const intervals = [
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ];
// if (!intervals.length) return [];

// intervals.sort((a, b) => a[0] - b[0]);

// const merged = [intervals[0]];

// for (let i = 1; i < intervals.length; i++) {
//   const current = merged[merged.length - 1];
//   const interval = intervals[i];

//   if (interval[0] <= current[1]) {
//     current[1] = Math.max(current[1], interval[1]);
//   } else {
//     merged.push(interval);
//   }
// }

// console.log(merged);


 
// function customSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length - 1 - i; j++) {
//             if(arr[j] > arr[j + 1]) {
//                 // Swap
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// // 6. Find Smallest Range Covering Elements from K Lists
// function findSmallestRange(list1, list2, list3) {
//     // Combine arrays
//     let allNums = [];
//     for(let i = 0; i < list1.length; i++) allNums.push(list1[i]);
//     for(let i = 0; i < list2.length; i++) allNums.push(list2[i]);
//     for(let i = 0; i < list3.length; i++) allNums.push(list3[i]);
    
  
//     let unique = [];
//     for(let i = 0; i < allNums.length; i++) {
//         let exists = false;
//         for(let j = 0; j < unique.length; j++) {
//             if(allNums[i] === unique[j]) {
//                 exists = true;
//                 break;
//             }
//         }
//         if(!exists) unique.push(allNums[i]);
//     }
    
//     // Sort unique numbers
//     allNums = customSort(unique);
    
//     let smallestRange = [allNums[0], allNums[allNums.length - 1]];
//     let smallestLen = smallestRange[1] - smallestRange[0];
    
//     for(let i = 0; i < allNums.length; i++) {
//         for(let j = i; j < allNums.length; j++) {
//             let range = [allNums[i], allNums[j]];
            
//             // Check if range contains element from each list
//             let has1 = false, has2 = false, has3 = false;
            
//             for(let k = 0; k < list1.length; k++) {
//                 if(list1[k] >= range[0] && list1[k] <= range[1]) {
//                     has1 = true;
//                     break;
//                 }
//             }
            
//             for(let k = 0; k < list2.length; k++) {
//                 if(list2[k] >= range[0] && list2[k] <= range[1]) {
//                     has2 = true;
//                     break;
//                 }
//             }
            
//             for(let k = 0; k < list3.length; k++) {
//                 if(list3[k] >= range[0] && list3[k] <= range[1]) {
//                     has3 = true;
//                     break;
//                 }
//             }
            
//             if(has1 && has2 && has3) {
//                 let len = range[1] - range[0];
//                 if(len < smallestLen) {
//                     smallestLen = len;
//                     smallestRange = range;
//                 }
//             }
//         }
//     }
    
//     return smallestRange;
// }

//  const res = findSmallestRange([4,10,15],[1,3,8],[2,6]);
// console.log(res);

// 8. 3-Sum Closest to Target
//  var nums = [-1,2,1,-4]
//  const target = 1
//     // Sort array
//     nums = customSort(nums);
    
//     let closestSum = nums[0] + nums[1] + nums[2];
//     let closestDiff = Math.abs(closestSum - target);
    
//     for(let i = 0; i < nums.length - 2; i++) {
//         let left = i + 1;
//         let right = nums.length - 1; 
//     // console.log(nums , "nums", closestDiff , "closetdiff" , closestSum , "closetsum"); 
        
//         while(left < right) {
//             let sum = nums[i] + nums[left] + nums[right];
//             let diff = Math.abs(sum - target);
            
//             if(diff < closestDiff) {
//                 closestDiff = diff;
//                 closestSum = sum;
//             }
            
//             if(sum < target) {
//                 left++;
//             } else if(sum > target) {
//                 right--;
//             } else {
//                 return sum;
//             }
//         }
//     }
    
//   console.log(closestSum , "closetsum");
  
// 9. Word Break Problem
let s = "leetcode";
let wordDict = ["leet", "code", "cod"];
function wordBreak(s, wordDict) {
    b 
    function isInDict(str) {
        for(let i = 0; i < wordDict.length; i++) {
            if(wordDict[i] === str) return true;
        }
        return false;
    }
    
    
    for(let i = 1; i < s.length; i++) {
        let firstPart = s.substring(0, i);
        let secondPart = s.substring(i);
        
        if(isInDict(firstPart) && isInDict(secondPart)) {
            return true;
        }
    }
    
    return false;
}
console.log("Word Break Result:", wordBreak(s, wordDict));


function largestRectangle(heights1, heights2) {
    
    let heights = [];
    for(let i = 0; i < heights1.length; i++) {
        heights.push(heights1[i]);
    }
    for(let i = 0; i < heights2.length; i++) {
        heights.push(heights2[i]);
    }
    
    let maxArea = 0;
    let maxHeights = [];
    
   
    for(let i = 0; i < heights.length; i++) {
        for(let j = i; j < heights.length; j++) {
            
            let minHeight = heights[i];
            for(let k = i; k <= j; k++) {
                if(heights[k] < minHeight) {
                    minHeight = heights[k];
                }
            }
            
            
            let width = j - i + 1;
            let area = width * minHeight;
            
            if(area > maxArea) {
                maxArea = area;
                maxHeights = [heights[i], heights[j]];
            }
        }
    }
    
    return {
        area: maxArea,
        heights: maxHeights
    };
}







