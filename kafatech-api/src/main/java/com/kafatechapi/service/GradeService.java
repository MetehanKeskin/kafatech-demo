package com.kafatechapi.service;

import com.kafatechapi.dao.GradeRepository;
import com.kafatechapi.entity.Grade;
import jakarta.websocket.server.PathParam;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class GradeService {


    private GradeRepository gradeRepository;

    public GradeService(GradeRepository gradeRepository) {
        this.gradeRepository = gradeRepository;

    }

    public List<Grade> getAllGrades() {
        return this.gradeRepository.findAll();
    }

    public void deleteGrade(Integer gradeId) {
        this.gradeRepository.deleteById(gradeId);
    }

    public void saveGrade(Grade grade) {
        this.gradeRepository.save(grade);
    }

}