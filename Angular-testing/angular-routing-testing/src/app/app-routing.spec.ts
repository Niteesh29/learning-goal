import { async, ComponentFixture, TestBed } from "@angular/core/testing"
import { Router, RouterLinkWithHref } from "@angular/router"
import { RouterTestingModule } from "@angular/router/testing"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { StudentComponent } from "./student/student.component"
import { routes } from './app-routing.module'
import { Location } from '@angular/common'
import { By } from "@angular/platform-browser"

describe('testing routing', () => {
    let component: StudentComponent
    let fixture: ComponentFixture<StudentComponent>

    let appComponent: AppComponent
    let appFixture: ComponentFixture<AppComponent>

    let objRouter: Router
    let location: Location

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StudentComponent, AppComponent],
            imports: [AppRoutingModule, RouterTestingModule.withRoutes(routes)]
        }).compileComponents()
    }))

    beforeEach(() => {
        objRouter = TestBed.inject(Router);
        location = TestBed.inject(Location);

        fixture = TestBed.createComponent(StudentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        appFixture = TestBed.createComponent(AppComponent);
        appComponent = appFixture.componentInstance
        objRouter.initialNavigation()
    })

    // it('unit test case for default route, ', async(() => {
    //     appFixture.detectChanges();
    //     appFixture.whenStable().then(() => {
    //         expect(location.path()).toEqual('/student')
    //     })
    // }))

    it('unit test case for student route, ', async(() => {
        appFixture.detectChanges();
        let link = appFixture.debugElement.queryAll(By.directive(RouterLinkWithHref))
        link[0].nativeElement.click();
        appFixture.whenStable().then(() => {
            expect(location.path()).toEqual('/student')
        })
    }))

}
)