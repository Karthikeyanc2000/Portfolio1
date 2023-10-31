import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificationComponent } from './certification/certification.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { EducationComponent } from './education/education.component';


const routes: Routes = [
  {path:'',redirectTo:"About",pathMatch:'full'},
  {path:"About",component:AboutComponent},
  {path:"Experience",component:ExperienceComponent},
  {path:"Education",component:EducationComponent},
  {path:"Skills",component:SkillsComponent},
  {path:"Projects",component:ProjectsComponent},
  {path:"Certification",component:CertificationComponent},
  {path:"Contact",component:ContactComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
