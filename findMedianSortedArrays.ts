function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

};

function getK (nums1: number[], start1: number, end1: number, nums2: number[], start2: number, end2: number, k: number): number {
    const len1: number = end1 - start1;
    const len2: number = end2 - start2;
    if (len1 > len2) return getK(nums2, start2, end2, nums1, start1, end1, k);
    if (len1 === 0) return nums2[start2 + k - 1];
    const diff = Math.floor(k/2);
    if (nums1[start1 + diff] > nums2[start2 + diff]) {
        return 
    }
}