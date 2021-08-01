import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Tutor {
  readonly id: string;
  readonly firstname?: string;
  readonly lastname?: string;
  readonly branch?: string;
  constructor(init: ModelInit<Tutor>);
  static copyOf(source: Tutor, mutator: (draft: MutableModel<Tutor>) => MutableModel<Tutor> | void): Tutor;
}