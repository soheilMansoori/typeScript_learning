interface Result<T> {
  data: T | null;
  error: null | string;
}

interface Course {
  title: string;
  price: number;
}

interface Articles {
  title: string;
}

const fetchData = <T>(url: string): Result<T> => {
  return { data: null, error: null };
};

const TsCourse = fetchData<Course>("https://sabzlearn.ir/product/typescript/");
const TsArticles = fetchData<Articles>(
  "https://sabzlearn.ir/article/typescript/"
);

interface Data<T> {
  data: T | null;
  error: null | string;
}

interface Users {
  users: [];
}

interface Todo {
  todo: [];
}

const fetchDataFromServer = async <T>(url: string): Promise<Data<T>> => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

const getUsers = fetchDataFromServer<Users>(
  "http://jsonplaceholder.typicode.com/users"
);
