package com.kafatechapi.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Students")
@Data
public class Student {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private Long studentId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    // Getter ve setter metotları
}