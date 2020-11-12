var strStr = function(haystack, needle) {

	if (!needle) return 0;
	let pointer2 = needle.length;

	for (let pointer1 = 0; pointer1 < (haystack.length - needle.length) + 1; pointer1++) {
		let substring = haystack.substring(pointer1, pointer2);
		if (substring === needle) {
			return pointer1;
		}
		pointer2++;
	}
	return -1;

};