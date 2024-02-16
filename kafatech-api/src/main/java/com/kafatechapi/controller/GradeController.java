package com.kafatechapi.controller;

import com.kafatechapi.entity.Grade;
import com.kafatechapi.service.GradeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/grades")
public class GradeController {

    private GradeService gradeService;

    public GradeController(GradeService gradeService) {
        this.gradeService = gradeService;
    }



    @GetMapping("")
    public List<Grade> getAllGrades() {
        return gradeService.getAllGrades();
    }

    @PostMapping
    public void saveCompany(@RequestBody Grade grade) {
        this.gradeService.saveGrade(grade);
    }


    @DeleteMapping("{gradeId}")
    public void deleteGrade(@PathVariable Integer gradeId) {
        this.gradeService.deleteGrade(gradeId);
    }
}
