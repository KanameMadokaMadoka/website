import React, { Component } from 'react';

export class HashTable {
    constructor() {
      this.table = {};
    }
  
    // 添加鍵值對到哈希表
    add(key, value) {
      this.table[key] = value;
    }
  
    // 從哈希表中刪除鍵值對
    remove(key) {
      delete this.table[key];
    }
  
    // 確認哈希表中是否包含指定的鍵
    contains(key) {
      return key in this.table;
    }
  
    // 根據鍵獲取值
    get(key) {
      return this.table[key];
    }
  
    // 返回所有鍵的數組
    keys() {
      return Object.keys(this.table);
    }
  
    // 返回所有值的數組
    values() {
      const values = [];
  
      for (const key in this.table) {
        if (this.contains(key)) {
          values.push(this.table[key]);
        }
      }
  
      return values;
    }
  
    // 返回哈希表中所有鍵值對的數量
    size() {
      return Object.keys(this.table).length;
    }
  
    // 清空哈希表
    clear() {
      this.table = {};
    }
  }
  
  // 創建一個新的哈希表
  const hashTable = new HashTable();
  
  // 添加鍵值對到哈希表
  hashTable.add('name', 'John');
  hashTable.add('age', 30);
  hashTable.add('city', 'New York');
  
  // 獲取哈希表的大小
  console.log(hashTable.size()); // 3
  
  // 獲取哈希表中指定鍵的值
  console.log(hashTable.get('name')); // 'John'
  
  // 確認哈希表中是否包含指定的鍵
  console.log(hashTable.contains('age')); // true
  console.log(hashTable.get('city'))
  // 刪除哈希表中的鍵值對
  // hashTable.remove('city');
  
  // 返回哈希表中所有鍵的數組
  console.log(hashTable.keys()); // ['name', 'age']
  
  // 返回哈希表中所有值的數組
  console.log(hashTable.values()); // ['John', 30]
  console.log(hashTable.contains('city'));
  
  // 清空哈希表
   hashTable.clear();
  



  class HashTableComponent extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        hashTable: {},
      };
    }
  
    componentDidMount() {
      // 創建一個新的哈希表
      const hashTable = {};
      // 添加鍵值對到哈希表
      hashTable['name'] = 'John';
      hashTable['age'] = 30;
      hashTable['city'] = 'New York';
  
      this.setState({ hashTable });
    }
    
    render() {
      const { hashTable } = this.state;
  
      return (
        <div>
          <h2>Hash Table Example</h2>
          <ul>
            {Object.keys(hashTable).map((key) => (
              <li key={key}>
                {key}: {hashTable[key]}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
  export default HashTableComponent;
  