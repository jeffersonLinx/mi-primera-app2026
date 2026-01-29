import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    // crear llamada instantane
    // aqui se llaman todas las rutas a utilizar en la navegacion
    {path: '', component:Home },
    {path: 'nosotros', component: About},
    {path: 'productos', component: Products},
    {path: 'contactos', component: Contact},
    {path: '**', redirectTo: ''}


];
