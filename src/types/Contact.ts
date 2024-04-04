import { IContact } from "../data/contacts";
import { generateUUID } from "../util/guid";
import { FormErrors } from "./FormErrors";

interface RequestParams {
  id?: string;
  name?: string;
  phone?: string;
  email?: string;
  age?: number;
}

export class ContactRequest {
  id: string;
  name?: string;
  phone?: string;
  email?: string;
  age?: number;

  constructor(params: RequestParams) {
    this.id = params.id || generateUUID();
    this.name = params.name;
    this.phone = params.phone;
    this.email = params.email;
    this.age = params.age;
  }

  setName(value: string): this {
    this.name = value;
    return this;
  }

  setPhone(value: string): this {
    this.phone = value;
    return this;
  }

  setEmail(value: string): this {
    this.email = value;
    return this;
  }

  setAge(value: string): this {
    this.age = parseInt(value);
    return this;
  }

  validate(): { errors?: FormErrors; contact?: IContact } {
    const errors: FormErrors = {};

    if (!this.name) {
      errors.name = "Required field";
    }
    const hasErrors = Boolean(Object.keys(errors).length)

    if (hasErrors) {
      return {
        errors,
        contact: undefined
      }
    }

    return {
      errors: undefined,
      contact: {
        id: this.id,
        name: this.name!,
        phone: this.phone,
        email: this.email,
        age: this.age
      }
    }
  }

  assert(value: unknown): value is string {
    if (typeof value !== 'string') {
      return false;
    }
    return true;
  }

}

