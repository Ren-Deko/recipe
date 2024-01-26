import { Injectable } from '@angular/core';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  async register(Username: any, Password: any, Email: any) {
	const salt = bcrypt.genSaltSync(10);
	const hashedPassword = bcrypt.hashSync(Password, salt);
	const user = {
		name: Username,
		email: Email,
		password: hashedPassword
	};
	const result = await fetch('http://127.0.0.1:8000/api/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	});
	return result.json();
  }
	
	constructor() { }

	async getUsers() {
		return (await fetch('http://127.0.0.1:8000/api/users')).json()
	}

	// Checks user credentials and returns a valid token or null
	async login(Username: string, Password: string) {
		let users = await this.getUsers();
		let user = users.find((u: { name: string; password: string; }) => u.name === Username);
		if (user && bcrypt.compareSync(Password, user.password)) {
		  return user.id.toString();
		}
		return null;
	  }
}