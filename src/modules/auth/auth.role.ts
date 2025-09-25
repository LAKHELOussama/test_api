import { NextFunction, Request, Response } from "express";

interface Method {
  url: string;
  method: string[];
}

interface RolePermissions {
  role: string;
  method: Method[];
}

export class AuthRole {
  author: RolePermissions[] = [
    {
      role: "admin",
      method: [
        { url: "users", method: ['GET', 'DELETE', 'PATCH'] },
        { url: "order", method: ['GET', 'DELETE', 'PATCH'] },
        { url: "product", method: ['GET', 'DELETE', 'PATCH'] },
        { url: "invoice", method: ['GET', 'DELETE', 'PATCH'] },
        { url: "role", method: ['GET', 'DELETE', 'PATCH'] },
      ],
    },
    {
      role: "provider",
      method: [
        { url: "users", method: [] },
        { url: "order", method: ['GET', 'DELETE', 'PATCH'] },
        { url: "product", method: ['GET'] },
        { url: "invoice", method: ['GET', 'DELETE', 'PATCH'] },
        { url: "role", method: [] },
      ],
    },
    {
      role: "customer",
      method: [
        { url: "users", method: [] },
        { url: "order", method: ['GET', 'DELETE', 'PATCH'] },
        { url: "product", method: ['GET'] },
        { url: "invoice", method: ['GET', 'DELETE', 'PATCH'] },
        { url: "role", method: [] },
      ],
    }
  ];

  authRole(role: string, methodAuth: string, url: string): boolean {
    console.log("54321ws" )
    for (const author of this.author) {
      if (author.role === role) {
        for (const method of author.method) {
          
          if (url.includes(method.url) && method.method.includes(methodAuth)) {
          
            return true; 
          }
        }
      }
    }
    return false; // Access denied
  }
}
