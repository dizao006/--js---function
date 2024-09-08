//集合的接口
export interface IterableCollection<T> {
  createIterable: () => Iterator<T>; //返回一个t类型的迭代器
}

//迭代器的接口

export interface Iterator<T> {
  //下一个方法返回集合中的一个值
  getNext(): T | undefined;
  hasMore(): boolean;
}
