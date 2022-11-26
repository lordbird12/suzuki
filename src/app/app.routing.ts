import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/dashboards/project'
    { path: '', pathMatch: 'full', redirectTo: 'landing' },

    // Redirect signed in user to the '/dashboards/project'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'landing' },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule) },
            { path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule) },
            { path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule) },
            { path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule) },
            { path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule) }
        ]
    },
    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule) },
            { path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule) }
        ]
    },

    // Admin routes
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver,
        },
        children: [
            {
                path: 'landing', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
            },
            {
                path: 'home', loadChildren: () => import('./modules/admin/pages/home/home.module').then(m => m.HomeModule)
            },
           
            //user
            {
                path: 'member',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/g-admin/member/member.module').then(m => m.Module) },
                ]
            },
            {
                path: 'class-type',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/g-admin/class-type/class-type.module').then(m => m.Module) },
                ]
            },
            {
                path: 'class',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/g-admin/class/class.module').then(m => m.Module) },
                ]
            },
            {
                path: 'quest-type',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/g-admin/quest-type/quest-type.module').then(m => m.Module) },
                ]
            },
            {
                path: 'quest-sub-type',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/g-admin/quest-sub-type/quest-sub-type.module').then(m => m.Module) },
                ]
            },
            {
                path: 'quest-group',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/g-admin/quest-group/quest-group.module').then(m => m.Module) },
                ]
            },
            {
                path: 'quest',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/g-admin/quest/quest.module').then(m => m.Module) },
                ]
            },
            {
                path: 'round',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/g-admin/round/round.module').then(m => m.Module) },
                ]
            },
            {
                path: 'round-time',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/g-admin/round-time/round-time.module').then(m => m.Module) },
                ]
            },
            {
                path: 'item',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/g-admin/item/item.module').then(m => m.Module) },
                ]
            },
            {
                path: 'announcement',
                canActivate: [], children: [
                    { path: '', loadChildren: () => import('app/modules/admin/g-admin/announcement/announcement.module').then(m => m.Module) },
                ]
            },
            // 404 & Catch all
            { path: '404-not-found', pathMatch: 'full', loadChildren: () => import('app/modules/admin/pages/error/error-404/error-404.module').then(m => m.Error404Module) },
            { path: '**', redirectTo: '404-not-found' }
        ]
    },

];
