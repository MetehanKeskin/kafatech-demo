package com.kafatechapi.entity;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Table(name = "Grades")
public class Grade {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "grade_id")
    private Long gradeId;

    @ManyToOne
    @JoinColumn(name = "student_id", referencedColumnName = "student_id")
    private Student student;

    @Column(name = "subject")
    private String subject;

    @Column(name = "grade")
    private Double grade;

    // Getter ve setter metotları
}