export class HasakiTable {
    constructor(size) {
      this.size = size;
      this.buckets = new Array(size).fill(null).map(() => []);
    }
  
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
          hash = (hash + key.charCodeAt(i) * i) % this.size
        }
        console.log('==========================')
        console.log('我的Key是',key)
        console.log('我的哈希是',hash)
        return hash;
    }
  
    set(key, value) {
      const hash = this._hash(key);
      const bucket = this.buckets[hash];
      for (let i = 0; i < bucket.length; i++) {
        const [k, v] = bucket[i];
        console.log('此為set迴圈裡面的const [k, v] = bucket[i];',k,v,bucket[i])
        if (k === key) {
          // key already exists, update value
          bucket[i] = [key, value];
          console.log('有衝突發生所在Key:',key)
          console.log('他的值:',value)
          console.log('他的i:',i)
          return;
        }
      }
      // key does not exist, add new key-value pair
      bucket.push([key, value]);
      console.log('此為set方法裡面的bucket的長度:',bucket.length)
      bucket.map(function(a){console.log('此為bucket的內容物在set方法裡面的',a)})
    }
  
    get(key) {
      const hash = this._hash(key);
      const bucket = this.buckets[hash];
      for (let i = 0; i < bucket.length; i++) {
        const [k, v] = bucket[i];
        console.log('我是get裡面的k,v,bucket[i]',k,v,bucket[i])
        if (k === key) {
          console.log('有找到',k,'的值')
          return v;
        }
      }
      return undefined;
    }
    Keys() {
        return this.buckets.reduce((keys, bucket) => {
          return keys.concat(bucket.map((pair) => pair[0]));
        }, []);
      }
/*當你調用 Keys() 方法時，它返回的是 Object.keys(this.buckets)，這個方法返回一個對象的所有可枚舉屬性的字符串數組。然而，this.buckets 是一個數組，不是一個對象
它沒有可枚舉的屬性，因此 Object.keys(this.buckets) 返回的結果是空數組，也就是 []。如果你想要得到所有哈希表中的鍵，可以遍歷 buckets 中的每個桶，
然後遍歷桶中的每個鍵值對，然後將所有鍵存儲到一個數組中。你可以使用 reduce 方法來實現這個遍歷過程。例如，上方的Keys()可以實現

這個方法首先使用 reduce 方法遍歷所有桶，並將每個桶中的鍵值對的鍵存儲到一個數組中。在 reduce 的回調函數中，keys 是上一次遍歷累積的結果，
初始值為一個空數組 []。對於每個桶，我們使用 concat 方法將其鍵值對的鍵存儲到 keys 中。map 方法用於遍歷桶中的每個鍵值對，pair[0] 表示鍵值對的鍵。
最終，Keys() 方法返回了一個包含哈希表中所有鍵的數組。
*/
    values() {
        return this.buckets.reduce((keys, bucket) => {
            return keys.concat(bucket.map((pair) => pair[1]));
          }, []);
      }
  }
  