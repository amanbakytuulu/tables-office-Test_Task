import { UserType } from "./../types/index";
import { makeAutoObservable, onBecomeObserved, toJS } from "mobx";
import { axiosDefault } from "../constants";
import { ObjectType } from "../types";

class Store {
  objects: ObjectType[] = [];
  isLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
    onBecomeObserved(this, "objects", this.fetchObjects);
  }

  fetchObjects = async () => {
    try {
      this.isLoading = true;

      const [objectsData, usersData] = await Promise.all<[ObjectType[], UserType[]]>
      ([
        (await axiosDefault.get("/objects.php")).data,
        (await axiosDefault.get("/users.php")).data,
      ]);

      const newObjects = objectsData.map((object) => {
        const users = usersData.filter((user) => user.object_id === object.id);
        return { ...object, users };
      });
      this.objects = newObjects;
    } catch (error) {
      console.log(error);
    } finally {
      this.isLoading = false;
    }
    //   axiosDefault.get("/objects.php"),
    //   axiosDefault.get("/users.php"),
    // ])
    //   .then((data) => {
    //     const objectsData: ObjectType[] = data[0].data;
    //     const usersData: UserType[] = data[1].data;
    //     const newObjects = objectsData.map((object) => {
    //       const users = usersData.filter(
    //         (user) => user.object_id === object.id
    //       );
    //       return { ...object, users };
    //     });
    //     this.setObjects(newObjects);
    //     this.setLoading(false);
    //   })
    //   .catch((error) => {
    //     this.setLoading(false);
    //     console.log(error.message);
    //   });
  };
}

export default new Store();
